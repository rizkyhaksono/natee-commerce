<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SellingItem;
use Inertia\Inertia;

class CheckoutController extends Controller
{

  public function index()
  {
    $items = SellingItem::all();

    return Inertia::render('Checkout', [
      'items' => $items
    ]);
  }

  public function store(Request $request)
  {
    $items = $request->input('items');

    foreach ($items as $item) {
      SellingItem::create([
        'title' => $item['title'],
        'description' => $item['description'],
        'quantity' => $item['quantity'],
        'price' => $item['price'],
      ]);
    }

    return response()->json(['message' => 'Items stored successfully'], 200);
  }
}
