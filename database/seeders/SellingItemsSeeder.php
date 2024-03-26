<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SellingItem;

class SellingItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SellingItem::create([
            'title' => 'Netflix 1 Bulan',
            'description' => 'Akun sharing dan bisa digunakan di mobile application',
            'quantity' => 10,
            'price' => 20000
        ]);

        SellingItem::create([
            'title' => 'Netflix 1 Bulan',
            'description' => 'Akun sharing dan bisa digunakan di mobile application',
            'quantity' => 10,
            'price' => 20000
        ]);
    }
}
