//Actors List Deal
//1.create constant for mock card
const cardMock = $('.d-none');
for (const actor of actors) {
    //cloning using jquery
    const newCard = cardMock.clone();
    //appending using jquery
    newCard.appendTo($('.card-columns'));
    //adding information jquery
    newCard.find('.card-title').text(actor.name);
    newCard.find('img').attr('src', actor.picture);
    //adding class jquery
    newCard.addClass(actor.category);
    newCard.attr('id', actor.name.split(' ').join('-'));
    newCard.removeClass('d-none');
    //corecting capitalization
    newCard.find('.card-title').css('textTransform', 'capitalize');
    //No need to murder mock (⌣_⌣”)
}

//Cateogry Selection Filter

//Show category propetly
//first select all the buttons
$('.btn').on('click', function (e) {
    //create a constant get the value from the bottons
    const selectCategory = $(this).find('input').val();
    //console.log(selectCategory);
    $('.card').hide();
    //to pick a category based on cnst do this
    //turned to lower case because value are Capitalized (big dum dum)
    $('.' + selectCategory.toLowerCase()).show();
    //by applying same value
    $('#inputSelectCategory').val(selectCategory);
});

//Selector Actor (using separate for loop for clarity)
const optionMock = $('#actorName');
for (const actorPerson of actors) {
    //cloning using jquery
    const newOption = optionMock.clone();
    //appending using jquery
    newOption.appendTo($('#inputSelectActor'));
    //adding information jquery
    newOption.text(actorPerson.name);
    //! .split(' ').join('-') is making 'johndoe' -> 'john doe'
    // ! to link values and id
    newOption.val(actorPerson.name.split(' ').join(' '))
    //No need to murder mock (`皿´＃)
};
// Selection Event
$('.card').on('click', function (e) {
    //takes it away from all the unclicked
    $('.card').removeClass('bg-primary text-white');
    //adds it to all the clicked
    $(this).addClass('bg-primary text-white');
    //get the actor's name from the text not value.
    const selectedActorName = $(this).find('h5').text();
    console.log(selectedActorName);
    $('#inputSelectActor').val(selectedActorName);
});

$('input, select').attr('required', true);
//form validation
$('form').on('submit', function (e) {
    e.preventDefault();
    //you get it from the select element, the option si the value

    //to check for email emailValue.split('@')[1]includes.('.');
    const actorName = $('#inputSelectActor').val(); // john-doe
    $('form').html('Sorry, <span>' + $('#' + actorName).text() + '</span> is not currently available. You will be contacted as soon as possible.');
    $(this).find('span').css('text-transform', 'capitalize');
})

//BONUS 1 - Form to Page

$('#inputSelectCategory').on('change', function (e) {
    //create a constant get the value from the selector
    const inputCategory = $(this).val();
    console.log(inputCategory);
    $('.card').hide();
    //turned to lower case because value are Capitalized (big dum dum)
    $('.' + inputCategory.toLowerCase()).show();
    //activating button with specific value
    $('label.btn').removeClass('active');

    $('[value="' + inputCategory + '"]').parent('label').addClass('active');
});

$('#inputSelectActor').on('change', function (e) {
    //get the actor's name from the text not value.
    const selectedActorNameInput = $(this).val();
    console.log(selectedActorNameInput);
    $('.card').removeClass('bg-primary text-white');
    //adds it to all the clicked
    $('#' + selectedActorNameInput).addClass('bg-primary text-white');
});