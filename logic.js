let posts =  [
  "If newborn babies could speak they would be the most intelligent beings on planet earth.",
  "The Moment That Truth Is Organized It Becomes A Lie.",
  "Instagram is not the answer.",
  "No one believed Galileo either.",
  "Being born was the most influential thing that’s ever happened to me, for myself.",
  "When Life Gives You Big Problems, Just Be Happy You Forgot All Your Little Problems.",
  "I’ll never read every single book or go to every single place. But I’ll die in the trying of it.",
  "The only way to change something is to shock it. If you want your muscles to grow, you have to shock them. If you want society to change, you have to shock them.",
  "I feel like a serious revolution needs to take place in order for human beings to evolve in a way where we can truly exist as a society.",
  "If a cupcake falls from a tree how far away will it be from down.",
  "They Distract You With Us So You Don’t Pay Attention To The Missing Girls In Nigeria.",
  "We Need To Stop Teaching The Youth About The Past And Encourage Them To Change The Future.",
  "What is the definition of ‘light’?",
  "Unawareness Is The Only Sin, And If You Were Aware You Would Know.",
  "Trees are never sad look at them every once in a while they’re quite beautiful.",
  "Since we’re family, we both have wins, and we don’t really go against each other, like, ‘I’m gonna kill you,’ ",
  "People Use To Ask Me What Do You Wanna Be When You Get Older And I Would Say What A Stupid Question The Real Question Is What Am I Right Now."
]
let postsIndex = 0

function randomizePosts() {
  const postsCopy = posts.concat()
  const randomizedPosts = []

  for (let i = 0; i < postsCopy.length; i++) {
    const randomNumber = Math.floor(Math.random() * postsCopy.length)
    randomizedPosts.push(postsCopy[randomNumber])
    postsCopy.splice(randomNumber, 1)
    i--
  }
  posts = randomizedPosts
}

randomizePosts()

const commentCounts = [256, 234, 92, 12, 560, "1.2K"]
const retweetCounts = [493, 125, 976, 384, "1.5K", "2.2K", "1.3K", "3.5K"]
const likeCounts = ["28.9K", "44.5K", "15.4K", "7.2K", "15.4K", "39.7K", "50K"]
const dates = ["9. Jan.", "21. Feb.", "5. Mar.", "12. Jul.", "25. Aug.", "21. Dez.", "26. Sep."]

const post = document.querySelector("#post")
const commentCount = document.querySelector("#commentCount")
const retweetCount = document.querySelector("#retweetCount")
const likeCount = document.querySelector("#likeCount")
const button = document.querySelector("#nextQuote")
const date = document.querySelector("#date")

function getRandomElement(array) {
  const random = Math.floor(Math.random() * array.length)
  return array[random]
}

function initialContent() {
  post.innerHTML = posts[postsIndex]
  postsIndex++
}

function getPost() {
  if (postsIndex >= posts.length) {
    postsIndex = 0
  }
  const post = posts[postsIndex]
  postsIndex++
  return post
}

button.addEventListener("click", () => {
  post.innerHTML = getPost()
  commentCount.innerHTML = getRandomElement(commentCounts)
  retweetCount.innerHTML = getRandomElement(retweetCounts)
  likeCount.innerHTML = getRandomElement(likeCounts)
  date.innerHTML = " · " + getRandomElement(dates)
})

initialContent()
