(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var todos = [];

document.querySelector("#toDoSubmit").addEventListener("click", function (e) {
  e.preventDefault();
  var infoField = document.querySelector("#toDoInput");
  console.log(infoField.value);
  var todo = new Todo(infoField.value);
  todos.push(todo);
  render();
});

function Todo(item) {
  this.item = item;
  this.completed = false;
}

function render() {
  var list = document.querySelector("#toDo");
  list.innerHTML = "";
  todos.forEach(function (todo) {
    var li = document.createElement("li");
    li.textContent = todo.item;
    list.appendChild(li);
  });
}
render();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsRUFBUjs7QUFFSixTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsRUFDRyxnQkFESCxDQUNvQixPQURwQixFQUM2QixVQUFDLENBQUQsRUFBTztBQUNoQyxJQUFFLGNBQUYsR0FEZ0M7QUFFaEMsTUFBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFaLENBRjRCO0FBR2hDLFVBQVEsR0FBUixDQUFZLFVBQVUsS0FBVixDQUFaLENBSGdDO0FBSWhDLE1BQUksT0FBTyxJQUFJLElBQUosQ0FBUyxVQUFVLEtBQVYsQ0FBaEIsQ0FKNEI7QUFLaEMsUUFBTSxJQUFOLENBQVcsSUFBWCxFQUxnQztBQU1oQyxXQU5nQztDQUFQLENBRDdCOztBQVdBLFNBQVMsSUFBVCxDQUFjLElBQWQsRUFBb0I7QUFDbEIsT0FBSyxJQUFMLEdBQVksSUFBWixDQURrQjtBQUVsQixPQUFLLFNBQUwsR0FBaUIsS0FBakIsQ0FGa0I7Q0FBcEI7O0FBS0EsU0FBUyxNQUFULEdBQWtCO0FBQ2hCLE1BQUksT0FBTyxTQUFTLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUCxDQURZO0FBRWhCLE9BQUssU0FBTCxHQUFpQixFQUFqQixDQUZnQjtBQUdoQixRQUFNLE9BQU4sQ0FBYyxVQUFDLElBQUQsRUFBVTtBQUN0QixRQUFJLEtBQUssU0FBUyxhQUFULENBQXVCLElBQXZCLENBQUwsQ0FEa0I7QUFFdEIsT0FBRyxXQUFILEdBQWlCLEtBQUssSUFBTCxDQUZLO0FBR3RCLFNBQUssV0FBTCxDQUFpQixFQUFqQixFQUhzQjtHQUFWLENBQWQsQ0FIZ0I7Q0FBbEI7QUFTQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJsZXQgdG9kb3MgPSBbXTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvU3VibWl0XCIpXG4gIC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGUpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IGluZm9GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjdG9Eb0lucHV0XCIpO1xuICAgIGNvbnNvbGUubG9nKGluZm9GaWVsZC52YWx1ZSk7XG4gICAgbGV0IHRvZG8gPSBuZXcgVG9kbyhpbmZvRmllbGQudmFsdWUpO1xuICAgIHRvZG9zLnB1c2godG9kbyk7XG4gICAgcmVuZGVyKCk7XG4gIH0pXG5cblxuZnVuY3Rpb24gVG9kbyhpdGVtKSB7XG4gIHRoaXMuaXRlbSA9IGl0ZW07XG4gIHRoaXMuY29tcGxldGVkID0gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgbGV0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9cIik7XG4gIGxpc3QuaW5uZXJIVE1MID0gXCJcIjtcbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICBsaS50ZXh0Q29udGVudCA9IHRvZG8uaXRlbTtcbiAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgfSlcbn1cbnJlbmRlcigpO1xuIl19
