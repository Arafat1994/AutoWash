


export default function UseSignOutHook (){


    const SignOut =()=>{
        try {
            console.log("Runnning in the begong ")
            const UserToken = localStorage.getItem("Token") ; 
            if (UserToken) {
                localStorage.removeItem("Token");
                window.location.replace("/AutoWash") ; 
            }
            else {
                console.log("No user Found ");
            }

        } catch (err) {
            console.log("error Find UserToken")
        }

    }

    return { SignOut}

}