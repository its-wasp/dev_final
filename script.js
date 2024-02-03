const postBtn = document.getElementById('post-btn');

postBtn.addEventListener('click', (e) =>{

    let postContainer = document.querySelector('.post-container');
    e.preventDefault();
    postContainer.innerHTML += `<div class="tweets bordering">
    <div class="top flexing ">
    <img src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/031/original/profile_image.png?1706888739" alt="logo" width="50px" height="50px">
    <div class="user-details">Joanne Graham  @joannegraham</div>
    <div class="gapping" >
    <img id = "edit-btn" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/028/original/edit.png?1706888661" alt="logo">
    <img id = "delete-btn" src="https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643" alt="logo">
    </div>
    </div>
    <div class = "mid flexing ">
    <textarea name="post-tweet" id="post-tweet" cols="45" rows="8"></textarea>
    </div>
    <div class = "bottom">
    <img src="" alt="">
    <img src="" alt="">
    </div>
    </div>`;
    let postTweet = document.querySelector('.tweets');
    postTweet.classList.add('active');
    if(postTweet.classList.contains('active')){
        document.getElementById('post-tweet').value = document.getElementById('tweet-content').value;
    }
    postTweet.classList.remove('active');
    
});

