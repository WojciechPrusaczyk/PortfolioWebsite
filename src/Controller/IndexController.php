<?php

namespace App\Controller;

use App\Entity\Email;
use App\Form\EmailType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(MailerInterface $mailer, Request $request, bool $emailsend = null): Response
    {
        $emailEntity = new Email();

        $form = $this->createForm(EmailType::class, $emailEntity);

        $form->handleRequest($request);
        if ( $form->isSubmitted() && $form->isValid())
        {
            $email = (new \Symfony\Component\Mime\Email())
                ->to('woj.prusaczyk@gmail.com')
                ->from('reciever@serwer2331346.home.pl')
                ->subject($emailEntity->getTitle())
                ->html(
                    "<strong>Message from: ".$emailEntity->getContact()."</strong><br/><p>".
                    $emailEntity->getBody()."</p>"
                );

            $mailer->send($email);

            return $this->redirectToRoute('app_index', [ 'emailsend' => true ]);
        }

        return $this->render('/Index/index.html.twig', [
            'form' => $form->createView(),
            'title' => 'Wojciech Prusaczyk: portfolio',
            'emailSend' => $emailsend,
        ]);
    }
}
