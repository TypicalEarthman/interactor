<?php

namespace App\Http\Controllers;

use App\Email;
use Illuminate\Http\Request;

class EmailController extends Controller
{
    
    public function store(Request $request)
    {
        
        $email = $request["mail"];
        $type = $request["type"];
        $mail = new Email();
        $mail->mail = $email;
        $mail->type = $type;
        $mail->save();
        return redirect()->back();
    }
}
