@extends('dashboard.adminlayouts.app')

@section('content')

<section id="main-content" class="">
        <section class="wrapper">
        <!-- page start-->
        <!-- page start-->
        @if(session()->has('success_message'))
        <div class="alert alert-success alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">×</button>
            <h4><i class="icon fa fa-check"></i> Success!
           		{{ session()->get('success_message') }} </h4>
        </div>
        @endif
        <div class="row">
            <div class="col-lg-12">
                    <section class="panel">
                        <header class="panel-heading">
                            Edit Platform
                        </header>
                        <div class="panel-body">
                            <div class="position-center">
                                <form role="form" action="{{ route('admin.platform.update',$data['row']->id) }}" method="POST" id="form_sample_3" class="form-horizontal" enctype="multipart/form-data">
                            @csrf
                            <div class="form-group">
                                    <label for="exampleInputEmail1">Platform Title</label>
                                    <input type="text" class="form-control" id="title" name="platform_title" placeholder="Enter Title"
                                    value="{{ !empty($data['row']->platform_title) ? $data['row']['platform_title']:'' }}">
                                </div>
                                <button type="submit" class="btn btn-info">Submit</button>
                            </form>
                            </div>

                        </div>
                    </section>

            </div>
        </div>
    </section>
</section>
        @endsection
