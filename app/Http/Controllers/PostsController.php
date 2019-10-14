<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Http\Requests\Posts\AddFromValidation;
use App\Models\Posts;
use App\Models\Platform;

class PostsController extends Controller
{
    public function index()
    {
        $data = [];

        // $data['rows'] =Products::select('*')->get();
        $data['rows'] = DB::table('posts')->get();
        // dd($data['rows']);
        return view('dashboard.posts.index', compact('data'));
    }
    public function addposts()
    {
        $data = [];
        $data['platform'] = Platform::select('*')->get();
        return view('dashboard.posts.add', compact('data'));
    }
    public function store(AddFromValidation $request)
    {
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $image_name = rand(4952, 9857) . '_' . $image->getClientOriginalName();
            $image->move(public_path() . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . 'Posts', $image_name);
            $imagefinalname = url('/') . DIRECTORY_SEPARATOR . 'uploads' . DIRECTORY_SEPARATOR . 'Posts' . DIRECTORY_SEPARATOR . $image_name;
        }

        // if ($request->hasFile('other_images')) {
        // $other_images = $request->file('other_images');
        // $other_images_name = rand(4952, 9857) . '_' . $other_images->getClientOriginalName();
        // $other_images->move(public_path() . DIRECTORY_SEPARATOR . 'images' . DIRECTORY_SEPARATOR . 'posts' . DIRECTORY_SEPARATOR . 'other_images', $other_images_name);
        // }
        $request->request->add([
            'platform_title' => $request->get('title'),
            'shortdescription' => $request->get('shortdescription'),
            'fulldescription' => $request->get('fulldescription'),
            'author' => $request->get('author'),
            'image' => $imagefinalname,
            // 'other_images' => $other_images_name,
            'video_url' => $request->get('video_url'),
            'order' => $request->get('order'),
            'feature_product' => $request->get('feature_product'),
            'platform' => $request->get('platform_title'),
            'status' => $request->get('status'),
        ]);
        // dd($request);
        Posts::create($request->request->all());
        $request->session()->flash('success_message', 'Posts added Successfully.');
        return redirect()->route('admin.posts');
    }
    public function edit()
    { }
    public function update()
    { }
    public function delete()
    { }



    // ALL THE ((API)) SECTION
    public function index_api()
    {
        $collection = Posts::select('*')->get();
        $collection_array = $collection->toArray();
        // $chunks = $collection->chunk(3);

        return response()->json(array_chunk($collection_array, 3));
    }

    public function store_api(Request $request)
    {
        $validatedData = $request->validate([
            'title' => 'required',
            'shortdescription' => 'required',
            'fulldescription' => 'required',
            'author' => 'required',
            'image' => 'required',
            'order' => 'required',
            'platform' => 'required',

        ]);

        $posts = Posts::create([
            'title' => $validatedData['title'],
            'shortdescription' => $validatedData['shortdescription'],
            'fulldescription' => $validatedData['fulldescription'],
            'author' => $validatedData['author'],
            'image' => $validatedData['image'],
            'other_images' => $request->other_images,
            'video_url' => $request->video_url,
            'order' => $validatedData['order'],
            'feature_product' => $request->feature_product,
            'platform' => $validatedData['platform'],
            'status' => $request->status,
        ]);

        return response()->json('Post created!');
    }
}
