var options = {
  valueNames: [ 
    'name', 
    'company',
    { data: ['id']},
    { attr: 'src', name: 'image'}
  ]
};

var userList = new List('users', options);

var data = [{ 
    name: "Shivam T.", 
    company: "Evernote",
    image: "img/test_profile_img.png"
  },
  { name: "Andy Y.",
    company: "Roku",
    image: "img/test_profile_img.png"
  },
  { name: "Jimmy Y.",
    company: "Google",
    image: "img/test_profile_img.png"
  },
  { name: "Calvin D.",
    company: "Autodesk",
    image: "img/test_profile_img.png"
  },
  { name: "Michael G.",
    company: "Autodesk",
    image: "img/test_profile_img.png"
  }];

function populateData(data) {
  for (var i = 0; i < data.length; i++) {
    userList.add(data[i]);
  }
}

$( document ).ready(function() {
    $("#template").hide();
    populateData(data);
    //open the lateral panel
    $('.cd-btn').on('click', function(event){
      event.preventDefault();
      $('.cd-panel').addClass('is-visible');
    });
    //close the lateral panel
    $('.cd-panel').on('click', function(event){
      if( $(event.target).is('.cd-panel') || $(event.target).is('.cd-panel-close') ) { 
        $('.cd-panel').removeClass('is-visible');
        event.preventDefault();
      }
    });
});
