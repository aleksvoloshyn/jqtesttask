const addNewcommentButton = document.querySelector('.comments-addbutton')
const newCommentTextArea = document.querySelector('.comments-newtext')

addNewcommentButton.addEventListener('click', (e) => {
  const comments = document.querySelectorAll('.comments')
  let idCounter = comments.length + 1

  comments[0].insertAdjacentHTML(
    'afterend',
    ` <div class="comments" id="comment${idCounter}" style="display: block">
    <div class="profile">
      <img src="assets/images/anonymus.png" />
    </div>
    <div class="comment-content">
      <p class="name">
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">Usuário anônimo</font>
        </font>
      </p>
      <p>
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">${newCommentTextArea.value}</font> 
        </font>
      </p>
    </div>
    <div class="clr"></div>
    <div class="comment-status">
      <span>
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">Curte·comente</font>
        </font>
        <img src="assets/images/3.jpg" width="15px" height="15px" />
        <font style="vertical-align: inherit">
          <font style="vertical-align: inherit">29</font>
        </font>
      </span>
      <font style="vertical-align: inherit">
        <small>
          <font style="vertical-align: inherit">·</font>
        </small>

        <small>
          <u>
            <font style="vertical-align: inherit">4 minutos antes</font>
          </u>
        </small>
      </font>
      <small>
        <font style="vertical-align: inherit"></font>
        <u>
          <font style="vertical-align: inherit"></font>
        </u>
      </small>
    </div>
  </div>
`
  )

  newCommentTextArea.value = ''
})
