# All files in the 'lib' directory will be loaded
# before nanoc starts compiling.

def list_item_with_link_if_not_active (text, link, active)
  html = "<li>"
  if active
    html += "<a href='#{link}'>#{text}</a>"
  else
    html += "<span>#{text}</span>"
  end
  html += "</li>"
end
