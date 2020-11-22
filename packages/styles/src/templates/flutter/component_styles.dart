part of <%= packageName %>;
<% _.forEach(props, (prop) => { const className = _.upperFirst(prop.key) + "Styles" %>
class <%- className %> {
  <%- className %>._();
<% _.forEach(prop.value, (componentStyle) => {%>
<%
if(componentStyle.comment) { %>  /// <%= componentStyle.comment %><%}
else {
%>  /// <%= componentStyle.attributes.subitem %> for <%= componentStyle.attributes.item %><% } %>
  static const <%= componentStyle.name %> = <%= componentStyle.value %>;
<% }); %>}
<% }); %>