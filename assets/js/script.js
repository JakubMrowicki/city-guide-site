//Back to top button
const toTop = () => {
  document.documentElement.scrollTop = 0
  document.body.scrollTop = 0
}

//Slider code
const slider = {
  var: {
    next: 0,
    image: [
      {
        src: 'assets/img/attractions-1.jpg',
        title: 'Experience the Ennis night life.',
      },
      {
        src: 'assets/img/attractions-2.jpg',
        title: "Take in Ireland's most breath taking scenery.",
      },
      {
        src: 'assets/img/attractions-3.jpg',
        title: 'A trip to remember.',
      },
    ],
  },
  task: {
    start() {
      slider.task.set(slider.var.next)
      slider.var.next++
      if (slider.var.next > slider.var.image.length - 1) {
        slider.var.next = 0
      }
      setTimeout(slider.task.start, 4000)
    },
    set(index) {
      document.getElementById(
        'slider'
      ).style.backgroundImage = `url(${slider.var.image[index].src})`
      document.getElementById('text').textContent =
        slider.var.image[index].title
    },
    prev() {
      if (slider.var.next === 0) {
        slider.task.set(slider.var.image.length - 1)
        slider.var.next = slider.var.image.length - 1
      } else {
        slider.task.set(slider.var.next - 1)
        slider.var.next--
      }
    },
    next() {
      if (slider.var.next + 1 > slider.var.image.length - 1) {
        slider.task.set(0)
        slider.var.next = 0
      } else {
        slider.task.set(slider.var.next + 1)
        slider.var.next++
      }
    },
  },
}
document.onload = () => {
  if (document.getElementById('slider')) {
    slider.task.start()
  }
}
