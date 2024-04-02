<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\SellingItem;
use Inertia\Inertia;

class AdminSellingItemsController extends Controller
{
  public function index()
  {
    $items = SellingItem::all();

    return Inertia::render('Admin/Dashboard', [
      'items' => $items,
    ]);
  }

  public function show(SellingItem $item)
  {
    return Inertia::render('Admin/Dashboard', [
      'item' => $item,
    ]);
  }

  public function edit(SellingItem $item)
  {
    return Inertia::render('Admin/Dashboard', [
      'item' => $item,
    ]);
  }

  public function update(Request $request, SellingItem $item)
  {
    $validateData = $request->validate([
      'title' => 'required',
      'description' => 'required',
      'quantity' => 'required|integer',
      'price' => 'required|numeric',
    ]);

    $item->update($validateData);

    return Inertia::render('Admin/Dashboard', [
      'item' => $item,
    ]);
  }

  public function destroy(SellingItem $item)
  {
    $item->delete();

    return Inertia::render('Admin/Dashboard', [
      'item' => $item,
    ]);
  }
}
