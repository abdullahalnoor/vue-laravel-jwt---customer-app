<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Customer;

class CustomerController extends Controller
{
    public function all(){
        $customers = Customer::all();
        return response()->json([
            'customers'=>$customers,
        ],200);
    }

    public function get($id){
        $customer = Customer::find($id);
        return response()->json([
           'customer' =>$customer 
        ],200);
    }

    public function new(Request $request){
        // $customer = Customer::create($request->only(['name','email','phone','website']));

        $customer = new Customer();
        $customer->name = $request->name;
        $customer->email = $request->email;
        $customer->phone = $request->phone;
        $customer->website = $request->website;
        $customer->save();

        return response()->json([
           'customer' =>$customer 
        ],200);
    }
}
