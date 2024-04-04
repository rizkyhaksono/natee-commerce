<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\SellingItem;
use Inertia\Inertia;

class DashboardController extends Controller
{

  public function index()
  {
    $items = SellingItem::all();

    return Inertia::render('Dashboard', [
      'items' => $items
    ]);
  }
}
