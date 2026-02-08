export const getUsersInfo = async () => {
try {
    const res = await fetch('https://dummyjson.com/users');
    if (!res.ok){
        throw new Error('Ошибка доступа, проверьте url адрес');
    }
    const data = await res.json();
    
    return data.users.map(user => ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        maidenName:user.maidenName || '-',
        age: user.age,
        gender: user.gender,
        phone:user.phone,
        email: user.email,
        country: user.address.country,
        city: user.address.city,
        image: user.image,
        height: user.height,
        weight: user.weight,
        address: user.address


    }))
} catch (error) {
    console.log(error);
}finally{
    console.log('end');
}
}
