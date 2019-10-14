<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Requests\Platform\AddFromValidation;
use Illuminate\Support\Facades\DB;
use App\Models\Platform;

class PlatformController extends Controller
{

    public function index()
    {
        $data = [];

        // $data['rows'] =Products::select('*')->get();
        $data['rows'] = Platform::select('*')->get();
        // dd($data['rows']);
        return view('dashboard.platform.index', compact('data'));
    }
    public function addposts()
    {
        $data = [];
        $data['platform'] = Platform::select('*')->get();
        return view('dashboard.platform.add', compact('data'));
    }

    public function store(AddFromValidation $request)
    {
        $request->request->add([
            'platform_title' => $request->get('platform_title'),
        ]);
        Platform::create($request->request->all());
        $request->session()->flash('success_message', 'Platform added Successfully.');
        return redirect()->route('admin.platform');
    }


    public function delete(Request $request, $id)
    {
        $data = [];
        $data['row'] = Platform::where('id', $id)->first();

        $data['row']->delete();
        $request->session()->flash('success_message', 'Platform Deleted Succcessfully');
        return redirect()->route('admin.platform');
    }

    public function edit(Request $request, $id)
    {
        $data = [];
        $data['row'] = Platform::where('id', $id)->first();
        if (!$data['row']) {
            $request->session()->flash('error_message', 'Invalid Request.');
            return redirect()->route('admin.platform.add');
        }
        return view('dashboard.platform.edit', compact('data'));
    }

    public function update(Request $request, $id)
    {
        $data = [];
        $data['row'] = Platform::where('id', $id)->first();

        $user = auth()->user();
        $request->request->add([
            'platform' => $request->get('platform_title'),
            'createdby' => $user->id,
        ]);
        $data['row']->update($request->request->all());
        $request->session()->flash('success_message', 'Platform Update Succcessfully');
        return redirect()->route('admin.platform');
    }

    // ((API))
    public function index_api()
    {
        $platform = Platform::select('*')->get();

        return $platform->toJson();
    }
}
