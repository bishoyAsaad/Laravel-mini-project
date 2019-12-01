<?php

use Illuminate\Database\Seeder;
use App\Comment;
use App\Post;
use App\User;
use Faker as Faker;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        factory(User::class, 10)->create()->each(function ($user) {
            $faker = Faker\Factory::create();
            $num = $faker->randomNumber(1);
            echo "Number of Posts Created: ".$num."\n";
            $user->posts()->saveMany(factory(Post::class, $num)->make());
        });
        User::all()->each(function($user) {
            $posts = Post::all();
            foreach($posts as $post) {
                $faker = Faker\Factory::create();
                if ($faker->boolean(25)) {
                    $comment = factory(Comment::class)->make();
                    $comment->post_id = $post->id;
                    $user->comments()->save($comment);
                }
            };
        });
    }
}
