<?php

namespace App\Controller;

use http\Env\Response;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Routing\Annotation\Route;

class IndexController extends AbstractController
{
    #[Route('/', name: 'app_index')]
    public function index(): \Symfony\Component\HttpFoundation\Response
    {
        return $this->render('/index.html.twig', [
            'title' => 'Wojciech Prusaczyk: portfolio',
        ]);
    }
}
