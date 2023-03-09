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
    public function index(MailerInterface $mailer, Request $request): Response
    {
        $emailEntity = new Email();

        // przygotowanie formularza
        $form = $this->createForm(EmailType::class, $emailEntity);
        $form->handleRequest($request);

        if ( $form->isSubmitted() && $form->isValid())
        {
            /*
             * Przygotowanie maila
             */
            $email = (new \Symfony\Component\Mime\Email())
                ->to('reciever@serwer2331346.home.pl')
                ->from('reciever@serwer2331346.home.pl')
                ->subject($emailEntity->getTitle())
                ->html(
                    "<strong>Message from: ".$emailEntity->getContact()."</strong><br/><p>".
                    $emailEntity->getBody()."</p>"
                );

            /*
             * Wysyłka maila
             */
            try{
                $mailer->send($email);

                // Wysyłka kopii na skrzynkę główną
                if ($this->getParameter('app.saveCopies') == "true")
                {
                    try{
                        $email->to('woj.prusaczyk@gmail.com');
                        $mailer->send($email);
                    } catch (\Exception $exception){}
                }

                // przekierowanie na stronę główną
                $this->addFlash('success', "Pomyślnie wysłano maila");
                return $this->redirectToRoute('app_index');

            } catch (\Exception $exception)
            {
                $this->addFlash('error', "Wystąpił błąd");
            }
        }

        return $this->render('/Index/index.html.twig', [
            'form' => $form->createView(),
            'title' => 'Wojciech Prusaczyk: portfolio',
        ]);
    }
}
