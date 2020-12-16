part of <%= packageName %>;
<%
var getValuePrefix = ({attributes}) => {
  const { subitem } = attributes;
  if(subitem === "backgroundColor" || subitem === "color") {
    return "const ";
  }
  return "";
}
_.forEach(props, (prop) => { const className = _.upperFirst(prop.key) + "Styles" %>
class <%- className %> {
  <%- className %>._();
<% _.forEach(prop.value, (componentStyle) => {%>
<%
const { item, subitem, type } = componentStyle.attributes;
const name = _.camelCase(`${item === "root" ? "" : item} ${subitem}`);
if(componentStyle.comment) { %>  /// <%= componentStyle.comment %><%}
else {

%>  /// <%= _.startCase(subitem) %> for <%= _.startCase(item === "root" ? type : item) %><% } %>
  static const <%= name %> = <%= getValuePrefix(componentStyle) %><%= componentStyle.value %>;
<% }); %>}
<% }); %>
