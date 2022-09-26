
// Document is ready
$(document).ready(function () 
{
    
    let f=1,l=1,c=1
    var fname= $('#fname').val();
    var lname=$('#lname').val();
    var city=$('#city').val();
    var add=$('#add').val();
    var pass=$('#pass').val();
    var cpass=$('#cpass').val();
    var state=$('#state').val();
    var gender=$('.gender').val();
    var hobby=$('.hobby').val();


   $('#fname').keyup(function(){
       checkfname()
   });
   $('#lname').keyup(function(){
    checklname()
});

$('#email').keyup(function(){
    checkemail()
});

$('#city').keyup(function(){
    checkcity()
});

$('#add').keyup(function(){
    checkadd()
});


$('#pass').keyup(function(){
    checkpass()
});
$('#cpass').keyup(function(){
    checkpass()
  
$('.hobby').click(function(){
    checkhobby()
});
});
$('.gender').keyup(function(){
    checkgender()
});






   function checkfname()
   {
    var fname= $('#fname').val();
     let exp= /^[A-Za-z]+$/
     let r=exp.test(fname)

    if(fname.length==""){
        $('#b').show().html('pls enter first name')
        f=0
        e.preventDefault();
    }else if(r==false){
        f=0
        $('#b').show().html('pls enter character only')
        e.preventDefault();


    }else if(fname.length<3 || fname.length>13){
        f=0
        $('#b').show().html('pls enter min 3 and max 13 character only')
        e.preventDefault();

    }else{
        $('#b').hide().html()
        f=1
    }

    
   }
   function checklname()
   {
    var lname= $('#lname').val();
     let exp= /^[A-Za-z]+$/
     let r=exp.test(lname)

    if(lname.length==""){
        l=0
        $('#b').show().html('pls enter last name')
        e.preventDefault();
    }else if(r==false){
        l=0
        $('#b').show().html('pls enter character only in last name')
        e.preventDefault();


    }else if(lname.length<3 || lname.length>13){
        l=0
        $('#b').show().html('pls enter min 3 and max 13 character only in last name')
        e.preventDefault();

    }else{
        $('#b').hide().html()
        l=1
    }

    
   }


   function checkadd()
   {
    var add= $('#add').val();
     let exp= /^[A-Za-z]+$/
     let r=exp.test(add)

    if(add.length==""){
        $('#b').show().html('pls enter add')
        e.preventDefault();
    }else if(r==false){
        $('#b').show().html('pls enter character only in add')
        e.preventDefault();


    }else if(add.length<3 || add.length>13){
        $('#b').show().html('pls enter min 3 and max 13 character only in add')
        e.preventDefault();

    }else{
        $('#b').hide().html()
        flag=1
    }

    
   }

   function checkcity()
   {
    var city= $('#city').val();
     let exp= /^[A-Za-z]+$/
     let r=exp.test(city)

    if(city.length==""){
        $('#b').show().html('pls enter city')
        c=0
        e.preventDefault();
    }else if(r==false){
        c=0
        $('#b').show().html('pls enter character only in city')
        e.preventDefault();


    }else if(city.length<3 || city.length>13){
        c=0
        $('#b').show().html('pls enter min 3 and max 13 character only in city')
        e.preventDefault();

    }else{
        $('#b').hide().html()
        c=1
    }

    
   }
   
   







   function checkpass()
   {
    var pp= $('#pass').val();
    var cp= $('#cpass').val();
    if(pp=="" && cp == "")
    {
         
            $('#b').show().html('pls enter password and cpassword')
  
           

       
        

    }else if((pp.length<5 || pp.length>13) && (cp.length<5 || cp.length>13) )
    {
        $('#b').show().html('pls enter min 5 and max 13 character only in password')
      
      
        
        

    }else if(pp!=cp){
        $('#b').show().html('pls enter same password and cpassword')


    }else{
        $('#b').hide().html()
        flag=1

    }
   

   }

   function checkemail()
   {
    var email=$('#email').val();
       if(email=="")
       {
        $('#b').show().html('pls enter email')


       }else{
        $('#b').hide().html()

       }

   }
   function checkgender()
   {
    var gender=$('.gender').val();
       if(gender=="")
       {
        $('#b').show().html('pls enter gender')


       }else{
        $('#b').hide().html()

       }

   }
   function checkhobby(){
    var hobby=$('input:checkbox:checked').length;
    if(hobby==0){
        $('#b').show().html('pls enter hobby ')

    }else if(hobby<=2){
       
        $('#b').show().html('pls enter hobby greater than two ')

    }else{
        $('#b').hide().html()

    }

   }
 
 


   $('#form').submit(function (e) 
   {
    var fname= $('#fname').val();
    var lname=$('#lname').val();
    var city=$('#city').val();
    var add=$('#add').val();
    var pass=$('#pass').val();
    var cpass=$('#cpass').val();
    var state=$('#state').val();
    var gender=$('.gender').val();
    var hobby=$('input:checkbox:checked').length;
    var email=$('#email').val();
    
       


  
    if(fname.length=="" || lname.length=="" || email.length=="" || city.length=="" || add.length=="" || pass.length=="" || cpass.length==""   || gender.length==""  || state.length=="" || hobby==""){
        $('#b1').text('pls fill value')
        e.preventDefault();
    }else if( f==1 && l==1 && c==1 && fname.length>3 && lname.length>3 && email!="" && city!="" && hobby!="" && hobby!=1 && add!="" && gender!="" && pass==cpass ){
     
        alert('submitted')
        location.reload()


    }
   

 
  
 
    e.preventDefault();
    
    // if(a && b && c && ad && p){
        
    //     $('#b').text('ok')
    // }else{
    //     $('#b').text('pls enter only String')
    // }


 
   });











})
