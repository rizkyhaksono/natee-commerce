<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\SellingItem;
use Illuminate\Support\Facades\DB;
use Ramsey\Uuid\Type\Integer;

class SellingItemsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SellingItem::create([
            'title' => 'Netflix premium 1 bulan',
            'description' => 'Nonton netflix bisa dari hp dan laptop, bisa juga login lebih dari 1 device!.',
            'quantity' => 10,
            'price' => 50.00,
            'buyer_id' => $this->getRandomUserId(),
        ]);

        SellingItem::create([
            'title' => 'Spotify premium 1 bulan individu',
            'description' => 'Tanpa akun baru, pakai akun lama bisa!.',
            'quantity' => 5,
            'price' => 25.00,
            'buyer_id' => $this->getRandomUserId(),
        ]);

        SellingItem::create([
            'title' => 'Amazon Prime Video subscription',
            'description' => 'Unlimited streaming of movies and TV shows.',
            'quantity' => 8,
            'price' => 40.00,
            'buyer_id' => $this->getRandomUserId(),
        ]);

        SellingItem::create([
            'title' => 'Apple Music Family subscription',
            'description' => 'Listen to ad-free music with your family.',
            'quantity' => 12,
            'price' => 60.00,
            'buyer_id' => $this->getRandomUserId(),
        ]);

        SellingItem::create([
            'title' => 'Disney+ Hotstar VIP 1-year subscription',
            'description' => 'Access to exclusive Hotstar content and live sports.',
            'quantity' => 15,
            'price' => 70.00,
            'buyer_id' => $this->getRandomUserId(),
        ]);
    }

    private function getRandomUserId()
    {
        $maxUserId = DB::table('users')->max('id');
        $randomUserId = mt_rand(1, $maxUserId);
        return $randomUserId;
    }
}
