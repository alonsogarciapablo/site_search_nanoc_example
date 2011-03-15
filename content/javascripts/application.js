$(function(){

  var onClickToggleSearchTypeLink = function() {

    const SHOW_ADVANCED_SEARCH_LINK_TEXT = 'Búsqueda avanzada';
    const SHOW_REGULAR_SEARCH_LINK_TEXT = 'Búsqueda normal';

    var showAdvancedSearch = function() {
      $("#search_form input[type='submit']").after($("#toggle_search_type_link").remove());
      $("#toggle_search_type_link").html(SHOW_ADVANCED_SEARCH_LINK_TEXT);
      $("#toggle_search_type_link").click(onClickToggleSearchTypeLink);
    }

    var showRegularSearch = function() {
      $("#search_form #q").after($("#toggle_search_type_link").remove());
      $("#toggle_search_type_link").html(SHOW_REGULAR_SEARCH_LINK_TEXT);
      $("#toggle_search_type_link").click(onClickToggleSearchTypeLink);
    }
    
    var advancedSearchIsShown = function() {
      return ($("#advanced_search_fields").css('display') != 'none');
    }

    $("#advanced_search_fields").toggle();
    if (advancedSearchIsShown()) {
      showRegularSearch();
    } else {
      showAdvancedSearch();
    }
    return false;
  }

  $("#toggle_search_type_link").click(onClickToggleSearchTypeLink);

});
