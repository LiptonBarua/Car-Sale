import React, { useEffect, useState } from 'react';

const useSaller = email => {
    const [isSaller, setIsSaller] = useState(false);
    const [isSallerLoading, setIsSallerLoading] = useState(true);
   
    useEffect(() => {
        if (email) {
            fetch(`http://localhost:8000/users/admin/${email}`)
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    setIsSaller(data.isSaller);
                    setIsSallerLoading(false);
})
        }
    }, [email])
    return [isSaller, isSallerLoading]
}

export default useSaller;