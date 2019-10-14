@extends('dashboard.adminlayouts.app')

@section('css')
<link href="{{asset('css/dashboard_css/summernote.css')}}" rel="stylesheet">
@endsection

@section('content')

<section id="main-content" class="">
    <section class="wrapper">
        <!-- page start-->
        <!-- page start-->
        <div class="row">
            <div class="col-lg-12">
                <section class="panel">
                    <header class="panel-heading">
                        Posts Forms
                    </header>
                    <div class="panel-body">
                        <div class="position-center">
                            <form role="form" action="{{ route('admin.posts.store')}}" method="POST" id="form_sample_3" class="form-horizontal" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group">
                                    <label for="category">Platform(Category)</label><ins>*</ins>
                                    <select required class="form-control btn-primary" id="category" name="platform_title" placeholder="Enter Platform">
                                        <option selected disabled value="Select Platform">Select Platform</option>
                                        @if($data['platform'])
                                        @foreach($data['platform'] as $key=> $row)

                                        <option value="{{$row->id}}">{{$row->platform_title}}</option>


                                        @endforeach
                                        @endif
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="title">Title</label><ins>*</ins>
                                    <input required type="text" class="form-control" id="title" name="title" placeholder="Enter Title">
                                </div>
                                <div class="form-group">
                                    <label for="shortdescription">Short Description</label><ins>*</ins>
                                    <input required type="text" class="form-control" id="shortdescription" name="shortdescription" placeholder="Enter Short Description">
                                </div>
                                <div class="form-group">
                                    <label for="imageupload">Feature Image</label><ins>*</ins>
                                    <input required type="file" id="image" name="image">
                                    <p class="help-block">Example block-level help text here.</p>
                                </div>
                                <div class="form-group">
                                    <label for="other_images">Other Image&nbsp;<ins>(Multiple Images)</ins></label>
                                    <input type="file" multiple id="other_images" name="other_images">
                                    <p class="help-block">Example block-level help text here.</p>
                                </div>
                                <div class="form-group">
                                    <label for="discounted_percent">Video Url:</label>
                                    <input type="text" class="form-control" id="video_url" name="video_url" placeholder="Enter Video Url If Any ">
                                </div>
                                {{-- <div class="form-group">
                                    <label for="price">Price</label>
                                    <input type="text" class="form-control" id="price" name="price" placeholder="Enter Price">
                                </div>
                                <div class="form-group">
                                    <label for="discounted_price">Discounted Price</label>
                                    <input type="text" class="form-control" id="discounted_price" name="discounted_price" placeholder="Enter Discounted Price">
                                </div>
                                <div class="form-group">
                                    <label for="review">Review</label>
                                    <input type="text" class="form-control" id="review" name="review" placeholder="Enter Review">
                                </div>
                                <div class="form-group">
                                    <label for="specific_description">Specific Description</label>
                                    <textarea id="editor" name="specific_description" class="form-control" name="specific_description" placeholder="Enter Specific Description" cols="40" rows="5"></textarea>

                                </div> --}}

                                <div class="form-group">
                                    <label for="longdescription">Full Description</label><ins>*</ins>
                                    <textarea  id="editor1" class="form-control" name="fulldescription" placeholder="Enter Long Description" cols="40" rows="5"></textarea>
                                </div>
                                <div class="form-group">
                                    <label for="review">Author</label><ins>*</ins>
                                    <input required type="text" class="form-control" id="author" name="author" placeholder="Enter Author Name">
                                </div>
                                <div class="form-group">
                                    <label for="each_featureproduct">Feature Product(0 or 1)</label><ins>*</ins>
                                    <input required type="number" class="form-control" id="feature_product" name="feature_product" max="1" min="0" placeholder="Enter Each Feature Product">
                                </div>

                                <div class="form-group">
                                    <label for="discounted_percent">Order:</label><ins>*</ins>
                                    <input required type="number" class="form-control" id="order" name="order" placeholder="Enter Sort Order Number">
                                </div>
                                <div class="form-group">
                                    <label for="status">Status:</label><ins>*</ins>
                                    <input required type="text" class="form-control" id="status" name="status" placeholder="Enter Status">
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

@section('js')
<script src="{{asset('js/dashboard_js/ckeditor.js')}}"></script>
<script>
    ClassicEditor
            .create(document.querySelector('#editor1'))
            .catch(error => {
                console.error(error);
            });
    $(document).ready(function() {




    });
</script>
@endsection
