let blogs = []

function addBlog(event) {

  event.preventDefault()

  let projectName = document.getElementById('input-blog-project-name').value
  let startDate = parseInt(document.getElementById('input-blog-start-date').value)
  let EndDate = parseInt(document.getElementById('input-blog-end-date').value)
  let content = document.getElementById('input-blog-content').value
  let tech = document.getElementById('inpiy')
  let image = document.getElementById('input-blog-image')

  image = URL.createObjectURL(image.files[0])

  let blog = {
    projectName,
    content,
    tech,
    image,
    startDate,
    EndDate
  }

  blogs.push(blog)

  renderBlog()

}

function renderBlog() {

  let lengthData = blogs.length
  // console.log(lengthData)

  let blogContainer = document.getElementById('contents')

  blogContainer.innerHTML = firstBlogContent()

  // looping / perulangan
  for (let i = 0; i < lengthData; i++) {

    blogContainer.innerHTML += `
        <div class="blog-list-item">
            <div class="blog-image">
              <img src="${blogs[i].image}" alt="" />
            </div>
            <div class="blog-content">
              <h1>
                <a href="blog-detail.html" target="_blank"
                  >${blogs[i].projectName}</a>
              </h1>
              <div class="detail-blog-content">
                 Duration ${getDistanceTime(blogs[i].startDate)}
              </div>
              <p>
              ${blogs[i].content}
              </p>
              <div class="blog-logo-content">
              <a href="" style="color: black;"><i class="fab fa-google-play"></i></a>
              <a href="" style="color: black;"><i class="fas fa-desktop"></i></a>
              <a href="" style="color: black;"><i class="fas fa-biohazard"></i></a>
              <a href="" style="color: black;"><i class="fab fa-react"></i></a>
              </div>
              <div class="btn-group">
                <button class="btn-edit">Edit</button>
                <button class="btn-post">Delete</button>
              </div>
            </div>
          </div>
        `
  }
}

function getDistanceTime(time) {

  const distance = new Date() - new Date(time)

  // convert to day
  const milisecond = distance/1000
  const minute = milisecond/60
  const hour = minute/60
  const day = hour/24
  const month = day/30
  const year = month/12

  let dayDistance = day

  if (dayDistance >= 1) {
    const time = Math.floor(dayDistance) + ' a day ago'
    console.log("time " + time);
    return time
  } else {
    // Convert to hour
    let monthDistance = Math.floor(month)
    // hourDistance = 0.1
    if (monthDistance > 29) {
      return monthDistance + ' bulan'
    } else {
      // convert to minute
      const minuteDistance = Math.floor(distance / (month * year))
      return minuteDistance + ' bulan'
    }
  }

}

function firstBlogContent() {
  return `
  <div class="blog-list-item">
  <div class="blog-image">
    <img src="assets/image/blog-img.png" alt="" />
  </div>
  <div class="blog-content">
    <h1>
      <a href="blog-detail.html" target="_blank"
        >Dumbways Mobile App-2022</a>
    </h1>
    <div class="detail-blog-content">
      durasi : 1 bulan
    </div>
    <p>
      Ketimpangan sumber daya manusia (SDM) di sektor digital masih
      menjadi isu yang belum terpecahkan.
    </p>
    <div class="blog-logo-content">
      <a href="" style="color: black;"><i class="fab fa-google-play"></i></a>
      <a href="" style="color: black;"><i class="fas fa-desktop"></i></a>
      <a href="" style="color: black;"><i class="fas fa-biohazard"></i></a>
    </div>
    <div class="btn-group">
      <button class="btn-edit">Edit</button>
      <button class="btn-post">Delete</button>
    </div>
  </div>
</div>
    `
}

let valueList = document.getElementById('value-tech')
let listArray = []

let technologies = document.querySelectorAll('.tech')

    for (let tech of technologies)
    tech.addEventListener('click',function(){
      if(this.checked == true){
        listArray.push(this.value)
        valueList = listArray
        console.table(valueList)
      }else{
        console.log('not click')
      }
    })