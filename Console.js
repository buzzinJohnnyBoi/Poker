

var MyConsole = {
    path: "#ConsoleLogs",
    name: "log",
    counter: 1,
    Log: function(str, type, show = true)
    {
        var li_id;
        if(type != undefined)
        {
            li_id = MyConsole.CreateElement("li", {id: MyConsole.name + MyConsole.counter, class: "log", logtype: type}, MyConsole.path);
        }
        else{
            li_id = MyConsole.CreateElement("li", {id: MyConsole.name + MyConsole.counter, class: "log"}, MyConsole.path);
        }
        if(!show)
        {
            document.querySelector(li_id).style.display = "none";
        }
        var id = MyConsole.CreateElement("log", {id: MyConsole.name + (MyConsole.counter + 1)}, li_id);
        var tag = document.querySelector(id);
        tag.innerHTML = str;
        tag.removeAttribute("id");
        MyConsole.counter ++;
        theConsoleLogs.scrollTop = theConsoleLogs.scrollHeight;
        return li_id;
    },
    Error: function(str, type, show = true)
    {
        var li_id;
        if(type != undefined)
        {
            li_id = MyConsole.CreateElement("li", {id: MyConsole.name + MyConsole.counter, class: "error", logtype: type}, MyConsole.path);
        }
        else{
            li_id = MyConsole.CreateElement("li", {id: MyConsole.name + MyConsole.counter, class: "error"}, MyConsole.path);
        }
        if(!show)
        {
            document.querySelector(li_id).style.display = "none";
        }
        var id = MyConsole.CreateElement("error", {id: MyConsole.name + (MyConsole.counter + 1)}, li_id);
        var tag = document.querySelector(id);
        tag.innerHTML = str;
        tag.removeAttribute("id");
        MyConsole.counter ++;
        return li_id;
    },
    Warn: function(str, type, show = true)
    {
        var li_id;
        if(type != undefined)
        {
            li_id = MyConsole.CreateElement("li", {id: MyConsole.name + MyConsole.counter, class: "warn", logtype: type}, MyConsole.path);
        }
        else{
            li_id = MyConsole.CreateElement("li", {id: MyConsole.name + MyConsole.counter, class: "warn"}, MyConsole.path);
        }
        if(!show)
        {
            document.querySelector(li_id).style.display = "none";
        }
        var id = MyConsole.CreateElement("warn", {id: MyConsole.name + (MyConsole.counter + 1)}, li_id);
        var tag = document.querySelector(id);
        tag.innerHTML = str;
        tag.removeAttribute("id");
        MyConsole.counter ++;
        return li_id;
    },
    Delete: function(id)
    {
        document.querySelector(id).remove();
    },
    Replace: function(id, str)
    {
        var el = document.querySelector(id);
        if(el != undefined)
        {
            var type = MyConsole.findType(el.innerHTML);
            el.innerHTML = "<" + type + ">" + str + "</" + type + ">";
        }
    },
    ReplaceAll: function(id, str, type)
    {
        var el = document.querySelector(id);
        if(el != undefined)
        {
            el.className = type.toLowerCase();
            el.innerHTML = "<" + type + ">" + str + "</" + type + ">";
        }
    },
    findType: function(str)
    {  
        var type = "";
        for(var i = 1; i < str.length; i++)
        {
            if(str[i] == ">") {
                return type;
            }
            type += str[i];
        }
    },
    CreateElement: function(type, attributes, path)
    {
      const parent = document.querySelector(path);
      const el = document.createElement(type);
      for(const attribute in attributes)
      {
          el.setAttribute(attribute, attributes[attribute]);
      }
      parent.appendChild(el);
      if(attributes["id"] != undefined)
      {
          return "#" + attributes["id"];
      }
    },
    keypress: function(e)
    {
        if(e.keyCode == 13)
        {
            MyConsole.ReadCommands();
        }
    },
    ReadCommands: function()
    {
        var el = document.querySelector("#Commands");
        if(el == document.activeElement)
        {
            var value = el.value;
            el.value = "";
            el.placeholder = value;

            if(value[0] == "#")
            {
                var word = "";
                var words = [];
                for (let i = 1; i < value.length; i++) {
                    if(value[i] == " ")
                    {
                        words.push(word);
                        word = "";
                    }
                    else{
                        if(value[i] == "-")
                        {
                            word += " ";
                        }
                        else {
                            word += value[i];
                        }
                    }
                }
                if(word != "")
                {
                    words.push(word);
                }
                document.dispatchEvent(new CustomEvent("Commands", { detail: { commands: words } } ));
                MyConsole.DispatchCommand(words);
            }
        }
    },
    DispatchCommand: function(words)
    {
        // --------------- Log Commands ---------------
        if(words[0] == "log")
        {
            if(words[2] == "true" || words[2] == "false" || words[2] == undefined)
            {
                if(words[2] == "true")
                {
                    var id = MyConsole.Log(words[1]);
                    MyConsole.ReplaceAll(id, `${words[1]}: ${id}`, "log")
                }
                else {
                    MyConsole.Log(words[1]);
                }
            }
            else {
                if(words[3] == "true")
                {
                    var id = MyConsole.Log(words[1], words[2]);
                    MyConsole.ReplaceAll(id, `${words[1]}: ${id}`, "log")
                }
                else {
                    MyConsole.Log(words[1], words[2]);
                }
            }
        }
        if(words[0] == "warn")
        {
            if(words[2] == "true" || words[2] == "false" || words[2] == undefined)
            {
                if(words[2] == "true")
                {
                    var id = MyConsole.Warn(words[1]);
                    MyConsole.ReplaceAll(id, `${words[1]}: ${id}`, "warn")
                }
                else {
                    MyConsole.Warn(words[1]);
                }
            }
            else {
                if(words[3] == "true")
                {
                    var id = MyConsole.Warn(words[1], words[2]);
                    MyConsole.ReplaceAll(id, `${words[1]}: ${id}`, "warn")
                }
                else {
                    MyConsole.Warn(words[1], words[2]);
                }
            }
        }
        if(words[0] == "error")
        {
            if(words[2] == "true" || words[2] == "false" || words[2] == undefined)
            {
                if(words[2] == "true")
                {
                    var id = MyConsole.Error(words[1]);
                    MyConsole.ReplaceAll(id, `${words[1]}: ${id}`, "error")
                }
                else {
                    MyConsole.Error(words[1]);
                }
            }
            else {
                if(words[3] == "true")
                {
                    var id = MyConsole.Error(words[1], words[2]);
                    MyConsole.ReplaceAll(id, `${words[1]}: ${id}`, "error")
                }
                else {
                    MyConsole.Error(words[1], words[2]);
                }
            }
        }
        if(words[0] == "replace")
        {
            if(words[1][0] == "#")
            {
                this.Replace(words[1], words[2]);
            }
            else {
                this.ReplaceAll(words[2], words[3], words[1]);
            }
        }
        if(words[0] == "show")
        {
            if(words[1] == "log" || words[1] == "error" || words[1] == "warn")
            {
                var arr = document.querySelectorAll("." + words[1]);
                for(var i = 0; i < arr.length; i++)
                {
                    arr[i].style.display = "block";
                }
            }
            else if(words[1] != "all"){
                var logs = document.querySelectorAll(".log");
                var errors = document.querySelectorAll(".error");
                var warns = document.querySelectorAll(".warn");

                for(var i = 0; i < logs.length; i++)
                {
                    if(logs[i].getAttribute("logtype") == words[1])
                    {
                        logs[i].style.display = "block";
                    }
                }
                for(var i = 0; i < errors.length; i++)
                {
                    if(errors[i].getAttribute("logtype") == words[1])
                    {
                        errors[i].style.display = "block";
                    }
                }
                for(var i = 0; i < warns.length; i++)
                {
                    if(warns[i].getAttribute("logtype") == words[1])
                    {
                        warns[i].style.display = "block";
                    }
                }
            }
            else {
                var logs = document.querySelectorAll(".log");
                var errors = document.querySelectorAll(".error");
                var warns = document.querySelectorAll(".warn");
                for(var i = 0; i < logs.length; i++)
                {
                    logs[i].style.display = "block";
                }
                for(var i = 0; i < errors.length; i++)
                {
                    errors[i].style.display = "block";
                }
                for(var i = 0; i < warns.length; i++)
                {
                    warns[i].style.display = "block";
                }
            }
        }
        if(words[0] == "hide")
        {
            if(words[1] == "log" || words[1] == "error" || words[1] == "warn")
            {
                var arr = document.querySelectorAll("." + words[1]);
                for(var i = 0; i < arr.length; i++)
                {
                    arr[i].style.display = "none";
                }
            }
            else if(words[1] != "all"){
                var logs = document.querySelectorAll(".log");
                var errors = document.querySelectorAll(".error");
                var warns = document.querySelectorAll(".warn");

                for(var i = 0; i < logs.length; i++)
                {
                    if(logs[i].getAttribute("logtype") == words[1])
                    {
                        logs[i].style.display = "none";
                    }
                }
                for(var i = 0; i < errors.length; i++)
                {
                    if(errors[i].getAttribute("logtype") == words[1])
                    {
                        errors[i].style.display = "none";
                    }
                }
                for(var i = 0; i < warns.length; i++)
                {
                    if(warns[i].getAttribute("logtype") == words[1])
                    {
                        warns[i].style.display = "none";
                    }
                }
            }
            else {
                var logs = document.querySelectorAll(".log");
                var errors = document.querySelectorAll(".error");
                var warns = document.querySelectorAll(".warn");
                for(var i = 0; i < logs.length; i++)
                {
                    logs[i].style.display = "none";
                }
                for(var i = 0; i < errors.length; i++)
                {
                    errors[i].style.display = "none";
                }
                for(var i = 0; i < warns.length; i++)
                {
                    warns[i].style.display = "none";
                }
            }
        }
        if(words[0] == "clear")
        {
            if(words[1] == "all" || words[1] == undefined) {
                var logs = document.querySelectorAll(".log");
                var errors = document.querySelectorAll(".error");
                var warns = document.querySelectorAll(".warn");
                for(var i = 0; i < logs.length; i++) {
                    logs[i].remove();
                }
                for(var i = 0; i < errors.length; i++) {
                    errors[i].remove();
                }
                for(var i = 0; i < warns.length; i++) {
                    warns[i].remove();
                }
            }
            else if(words[1] == "log" || words[1] == "error" || words[1] == "warn") {
                var arr = document.querySelectorAll("." + words[1]);
                for(var i = 0; i < arr.length; i++)
                {
                    arr[i].remove();
                }
            }
            else {
                var logs = document.querySelectorAll(".log");
                var errors = document.querySelectorAll(".error");
                var warns = document.querySelectorAll(".warn");
                for(var i = 0; i < logs.length; i++) {
                    if(logs[i].getAttribute("logtype") == words[1])
                    {
                        logs[i].remove();
                    }
                }
                for(var i = 0; i < errors.length; i++) {
                    if(errors[i].getAttribute("logtype") == words[1])
                    {
                        errors[i].remove();
                    }
                }
                for(var i = 0; i < warns.length; i++) {
                    if(warns[i].getAttribute("logtype") == words[1])
                    {
                        warns[i].remove();
                    }
                }
            }
        }
        if(words[0] == "size") {
            document.querySelector("#ConsoleLogs").style.height = words[1];
            document.querySelector("#Commands").style.top = words[1];
        }
    },
    Show: function(id)
    {
        document.querySelector(id).style.display = "block";
    },
    Hide: function(id)
    {
        document.querySelector(id).style.display = "none";
    },
    Setup: function()
    {
        var consoleDiv = this.CreateElement("Console", {id: "MyConsole"}, "body");
        var navDiv = this.CreateElement("nav", {id: "MyConsoleNav"}, consoleDiv);
        this.CreateElement("ul", {id: "ConsoleLogs"}, navDiv);
        this.CreateElement("input", {id: "Commands", placeholder: "Enter Text", type: "text"}, consoleDiv);
    },
    Find: function(type)
    {
        var find = [];

        var logs = document.querySelectorAll(".log");
        var errors = document.querySelectorAll(".error");
        var warns = document.querySelectorAll(".warn");

        for(var i = 0; i < logs.length; i++)
        {
            if(logs[i].getAttribute("logtype") == type)
            {
                find.push(logs[i].id);
            }
        }
        for(var i = 0; i < errors.length; i++)
        {
            if(errors[i].getAttribute("logtype") == type)
            {
                find.push(errors[i].id);
            }
        }
        for(var i = 0; i < warns.length; i++)
        {
            if(warns[i].getAttribute("logtype") == type)
            {
                find.push(warns[i].id);
            }
        }

        return find;
    }
}
document.addEventListener("keypress", MyConsole.keypress);
document.addEventListener("Commands", function(e) {
    console.log(e.detail.commands);
    Command(e.detail.commands);
    // document.querySelector("input").value = "";
});
MyConsole.Setup();

//--------------- Example ---------------
var theConsoleLogs = document.getElementById("ConsoleLogs");

