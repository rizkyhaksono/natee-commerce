<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\SellingItem;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;

class SellingItemsController extends Controller
{
    public function index()
    {
        $items = SellingItem::all();

        return Inertia::render('Home', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
            'items' => $items
        ]);
    }

    public function checkout()
    {
        return Inertia::render('Checkout');
    }

    public function create()
    {
        return Inertia::render('Items/Create');
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

    public function edit(SellingItem $item)
    {
        return Inertia::render('SellingItems/Edit', [
            'item' => $item,
        ]);
    }

    public function update(Request $request, SellingItem $item)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'description' => 'required',
            'quantity' => 'required|integer',
            'price' => 'required|numeric',
        ]);

        $item->update($validatedData);

        return redirect()->route('items.index')
            ->with('success', 'Selling item updated successfully.');
    }

    public function destroy(SellingItem $item)
    {
        $item->delete();

        return redirect()->route('items.index')
            ->with('success', 'Selling item deleted successfully.');
    }
}
