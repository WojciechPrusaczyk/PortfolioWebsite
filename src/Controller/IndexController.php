<?php

namespace App\Controller;

use App\Form\EmailType;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(): \Symfony\Component\HttpFoundation\Response
    {
        $form = $this->createForm(EmailType::class);
        return $this->render('/Index/index.html.twig', [
            'form' => $form->createView(),
            'title' => 'Wojciech Prusaczyk: portfolio',
        ]);
    }
}
