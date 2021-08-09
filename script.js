//Random number generator
function randNumGen(list){
    return Math.floor(Math.random() * list)
}
let choices = {
    words: ['flexibility','adventure','bravery','charisma','independence','determination','paitence','vibrancy','romance','inspiration','dedication','liveliness'],
    actions: ['Learn all About Home Remedies','Try 50 Different Kinds of Beer','Work As a Counselor','Share a Pet','Trek to Everest Base Camp','Eat at a 5 Star Restaurant','Eat Something Foreign That Looks Disgusting','Build A Community of Like-Minded People', 'Go Hiking', 'Get a Hug from a Monkey','Put your Mouth Under an Ice Cream Machine','Join the Civil Air Patrol','Cross-Country Road Trip With Friends','Finish the 60 Day Insanity Workout','Dye your Hair a Bright Color','Have Afternoon Tea in an Expensive Hotel','Hit a Hole in One']
}
//random word and action generator
function generate(){
    return `The random word for today is \'${choices.words[randNumGen(choices.words.length - 1)]}\' and the random action to do is, ${choices.actions[randNumGen(choices.actions.length - 1)]}`
}
console.log(generate())