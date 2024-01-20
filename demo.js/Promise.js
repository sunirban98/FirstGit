createPost(){
    return new Promise((resolve,reject)={
        resolve(user)
    })
}
const user={
    username:'sunirban',
    lastactivitytime:'13th of Jan'
}
updatelastactivitytime={
    return new Promise((resolve,reject)={
        setTimeOut(()=>{
            user.lastactivitytime=new Date().getTime();
            resolve(user.lastactivitytime)
        },1000)
    })
}
Promise.all([createPost({title: 'Post Five', body: 'This is Post Five'}), updateLastUserActivityTime()])