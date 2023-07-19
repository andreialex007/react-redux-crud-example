namespace ToDoApp.Code;

public class TaskItem
{
    public TaskItem()
    {
        
    }

    public TaskItem(string name, bool isDone = false)
    {
        this.Id = Guid.NewGuid().ToString();
        Name = name;
        IsDone = isDone;
    }
    
    public string Id { get; set; }
    public string Name { get; set; }
    public bool IsDone { get; set; }
}