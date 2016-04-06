(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var todos = [];

document.querySelector("#toDoSubmit").addEventListener("click", function (e) {
  e.preventDefault();
  var infoField = document.querySelector("#toDoInput");
  console.log(infoField.value);
  var todo = new Todo(infoField.value);
  todos.push(todo);
  infoField.value = "";
  render();
});

function Todo(item) {
  this.item = item;
  this.completed = false;
}

function render() {
  var list = document.querySelector("#toDo");

  // document.querySelector
  var oldTodos = document.querySelectorAll("#toDo li");

  Array.from(oldTodos).forEach(function (todo) {
    todo.removeEventListener("click", function (e) {
      markComplete(todo);
    });
  });

  // loop through existing todos, call removeEventListener
  // on each todo

  list.innerHTML = "";

  todos.forEach(function (todo) {
    var li = document.createElement("li");
    li.textContent = todo.item;
    list.appendChild(li);

    // add event listener to the li
    li.addEventListener('click', function (e) {
      markComplete(todo);
    });

    // add a class if the todo is completed
    if (todo.completed) {
      li.classList.add("completed");
    }
  });
}

function markComplete(todo) {
  if (todo.completed) {
    todo.completed = false;
  } else {
    todo.completed = true;
  }
  render();
}

render();

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxJQUFJLFFBQVEsRUFBUjs7QUFFSixTQUFTLGFBQVQsQ0FBdUIsYUFBdkIsRUFDRyxnQkFESCxDQUNvQixPQURwQixFQUM2QixVQUFDLENBQUQsRUFBTztBQUNoQyxJQUFFLGNBQUYsR0FEZ0M7QUFFaEMsTUFBSSxZQUFZLFNBQVMsYUFBVCxDQUF1QixZQUF2QixDQUFaLENBRjRCO0FBR2hDLFVBQVEsR0FBUixDQUFZLFVBQVUsS0FBVixDQUFaLENBSGdDO0FBSWhDLE1BQUksT0FBTyxJQUFJLElBQUosQ0FBUyxVQUFVLEtBQVYsQ0FBaEIsQ0FKNEI7QUFLaEMsUUFBTSxJQUFOLENBQVcsSUFBWCxFQUxnQztBQU1oQyxZQUFVLEtBQVYsR0FBa0IsRUFBbEIsQ0FOZ0M7QUFPaEMsV0FQZ0M7Q0FBUCxDQUQ3Qjs7QUFZQSxTQUFTLElBQVQsQ0FBYyxJQUFkLEVBQW9CO0FBQ2xCLE9BQUssSUFBTCxHQUFZLElBQVosQ0FEa0I7QUFFbEIsT0FBSyxTQUFMLEdBQWlCLEtBQWpCLENBRmtCO0NBQXBCOztBQUtBLFNBQVMsTUFBVCxHQUFrQjtBQUNoQixNQUFJLE9BQU8sU0FBUyxhQUFULENBQXVCLE9BQXZCLENBQVA7OztBQURZLE1BSVosV0FBVyxTQUFTLGdCQUFULENBQTBCLFVBQTFCLENBQVgsQ0FKWTs7QUFNaEIsUUFBTSxJQUFOLENBQVcsUUFBWCxFQUFxQixPQUFyQixDQUE2QixVQUFDLElBQUQsRUFBVTtBQUNyQyxTQUFLLG1CQUFMLENBQXlCLE9BQXpCLEVBQWtDLFVBQUMsQ0FBRCxFQUFPO0FBQ3ZDLG1CQUFhLElBQWIsRUFEdUM7S0FBUCxDQUFsQyxDQURxQztHQUFWLENBQTdCOzs7OztBQU5nQixNQWVoQixDQUFLLFNBQUwsR0FBaUIsRUFBakIsQ0FmZ0I7O0FBa0JoQixRQUFNLE9BQU4sQ0FBYyxVQUFDLElBQUQsRUFBVTtBQUNwQixRQUFJLEtBQUssU0FBUyxhQUFULENBQXVCLElBQXZCLENBQUwsQ0FEZ0I7QUFFcEIsT0FBRyxXQUFILEdBQWlCLEtBQUssSUFBTCxDQUZHO0FBR3BCLFNBQUssV0FBTCxDQUFpQixFQUFqQjs7O0FBSG9CLE1BTXBCLENBQUcsZ0JBQUgsQ0FBb0IsT0FBcEIsRUFBNkIsVUFBQyxDQUFELEVBQU87QUFDbEMsbUJBQWEsSUFBYixFQURrQztLQUFQLENBQTdCOzs7QUFOb0IsUUFXaEIsS0FBSyxTQUFMLEVBQWdCO0FBQ2xCLFNBQUcsU0FBSCxDQUFhLEdBQWIsQ0FBaUIsV0FBakIsRUFEa0I7S0FBcEI7R0FYVSxDQUFkLENBbEJnQjtDQUFsQjs7QUFvQ0EsU0FBUyxZQUFULENBQXNCLElBQXRCLEVBQTRCO0FBQzFCLE1BQUksS0FBSyxTQUFMLEVBQWdCO0FBQ2xCLFNBQUssU0FBTCxHQUFpQixLQUFqQixDQURrQjtHQUFwQixNQUVPO0FBQ0wsU0FBSyxTQUFMLEdBQWlCLElBQWpCLENBREs7R0FGUDtBQUtBLFdBTjBCO0NBQTVCOztBQVNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImxldCB0b2RvcyA9IFtdO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3RvRG9TdWJtaXRcIilcbiAgLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBsZXQgaW5mb0ZpZWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvSW5wdXRcIik7XG4gICAgY29uc29sZS5sb2coaW5mb0ZpZWxkLnZhbHVlKTtcbiAgICBsZXQgdG9kbyA9IG5ldyBUb2RvKGluZm9GaWVsZC52YWx1ZSk7XG4gICAgdG9kb3MucHVzaCh0b2RvKTtcbiAgICBpbmZvRmllbGQudmFsdWUgPSBcIlwiO1xuICAgIHJlbmRlcigpO1xuICB9KVxuXG5cbmZ1bmN0aW9uIFRvZG8oaXRlbSkge1xuICB0aGlzLml0ZW0gPSBpdGVtO1xuICB0aGlzLmNvbXBsZXRlZCA9IGZhbHNlO1xufVxuXG5mdW5jdGlvbiByZW5kZXIoKSB7XG4gIGxldCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiN0b0RvXCIpO1xuXG4gIC8vIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JcbiAgbGV0IG9sZFRvZG9zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIiN0b0RvIGxpXCIpO1xuXG4gIEFycmF5LmZyb20ob2xkVG9kb3MpLmZvckVhY2goKHRvZG8pID0+IHtcbiAgICB0b2RvLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZSkgPT4ge1xuICAgICAgbWFya0NvbXBsZXRlKHRvZG8pO1xuICAgIH0pXG4gIH0pXG5cbiAgLy8gbG9vcCB0aHJvdWdoIGV4aXN0aW5nIHRvZG9zLCBjYWxsIHJlbW92ZUV2ZW50TGlzdGVuZXJcbiAgLy8gb24gZWFjaCB0b2RvXG5cbiAgbGlzdC5pbm5lckhUTUwgPSBcIlwiO1xuXG5cbiAgdG9kb3MuZm9yRWFjaCgodG9kbykgPT4ge1xuICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgbGkudGV4dENvbnRlbnQgPSB0b2RvLml0ZW07XG4gICAgICBsaXN0LmFwcGVuZENoaWxkKGxpKTtcblxuICAgICAgLy8gYWRkIGV2ZW50IGxpc3RlbmVyIHRvIHRoZSBsaVxuICAgICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBtYXJrQ29tcGxldGUodG9kbyk7XG4gICAgICB9KTtcblxuICAgICAgLy8gYWRkIGEgY2xhc3MgaWYgdGhlIHRvZG8gaXMgY29tcGxldGVkXG4gICAgICBpZiAodG9kby5jb21wbGV0ZWQpIHtcbiAgICAgICAgbGkuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlZFwiKTtcbiAgICAgIH1cbiAgICB9KVxuXG59XG5cbmZ1bmN0aW9uIG1hcmtDb21wbGV0ZSh0b2RvKSB7XG4gIGlmICh0b2RvLmNvbXBsZXRlZCkge1xuICAgIHRvZG8uY29tcGxldGVkID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgdG9kby5jb21wbGV0ZWQgPSB0cnVlO1xuICB9XG4gIHJlbmRlcigpO1xufVxuXG5yZW5kZXIoKTtcbiJdfQ==
