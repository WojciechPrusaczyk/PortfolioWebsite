<?php

namespace App\Controller;

use App\Entity\Email;
use App\Form\EmailType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(): \Symfony\Component\HttpFoundation\Response
    {
        $email = new Email();

        $form = $this->createForm(EmailType::class, $email);

        if ( $form->isSubmitted() )
        {

        }

        return $this->render('/Index/index.html.twig', [
            'form' => $form->createView(),
            'title' => 'Wojciech Prusaczyk: portfolio',
        ]);
    }
}
