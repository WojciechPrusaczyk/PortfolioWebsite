<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ReactToutorialController extends AbstractController
{
    #[Route('/react/tutorial', name: 'app_react_toutorial')]
    public function index(): Response
    {
        return $this->render('react_toutorial/index.html.twig');
    }
}
