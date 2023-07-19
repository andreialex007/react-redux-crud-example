using Microsoft.AspNetCore.Mvc;
using ToDoApp.Code;
using ToDoApp.Dto;

namespace ToDoApp.Controllers;

[Route("[controller]")]
public class TasksController : ControllerBase
{
    private static List<TaskItem> _items = new()
    {
        new TaskItem("Work", true),
        new TaskItem("Relax")
    };

    public TasksController()
    {
        
    }

    [HttpGet()]
    public IEnumerable<TaskItem> Tasks()
    {
        return _items;
    }
    
    [HttpPost("add")]
    public IEnumerable<TaskItem> AddTask([FromBody] AddTaskDto item)
    {
        _items.Add(new TaskItem(item.Name));
        return _items;
    }
    
    [HttpDelete("{id:guid}")]
    public IEnumerable<TaskItem> RemoveTask(Guid id)
    {
        _items = _items.Where(x => x.Id != id.ToString()).ToList();
        return _items;
    }
}