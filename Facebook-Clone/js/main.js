// js/feed.js — Bharti
// 1. Like button toggle
const likeButtons = document.querySelectorAll('.post-footer button:first-child');
likeButtons.forEach(btn => {
let liked = false;
btn.addEventListener('click', () => {
liked = !liked;
btn.classList.toggle('liked', liked);
btn.innerHTML = liked
? ' Liked'
: ' Like';
});
});
// 2. Comment box toggle
const commentBtns = document.querySelectorAll('.post-footer button:nth-child(2)');
commentBtns.forEach(btn => {
btn.addEventListener('click', () => {
const post = btn.closest('.post');
let box = post.querySelector('.comment-box');
if (!box) {
box = document.createElement('div');
box.className = 'comment-box show';
box.innerHTML = '';
post.appendChild(box);
} else {
box.classList.toggle('show');
}
});
});

