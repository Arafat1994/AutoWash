


export default function UseSignOutHook (){


    const SignOut =()=>{
        try {
            console.log("Runnning in the begong ")
            const UserToken = localStorage.getItem("UserToken") ; 
            if (UserToken) {
                localStorage.removeItem("UserToken");
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