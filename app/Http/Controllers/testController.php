<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class testController extends Controller
{

    public function __construct()
    {
        $this->middleware('guest');
    }
    // protected $redirectTo = '/home';
    public function index(){
        return view('auth.login');
    }
}
