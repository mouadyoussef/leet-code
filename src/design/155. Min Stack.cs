public class MinStack
{
    int min = int.MaxValue;
    int size = 0;
    int[] arr = new int[8];

    public MinStack() { }

    public void Push(int val)
    {
        if (size == arr.Length)
        {
            int[] temp = new int[arr.Length * 2];
            for (int i = 0; i < arr.Length; i++)
            {
                temp[i] = arr[i];
            }
            arr = temp;
        }

        arr[size++] = val;
        min = Math.Min(min, val);
    }

    public void Pop()
    {
        size--;
        if (arr[size] == min)
        {
            min = int.MaxValue;
            for (int i = 0; i < size; i++)
            {
                if (min > arr[i])
                {
                    min = arr[i];
                }
            }
        }
    }

    public int Top()
    {
        return arr[size - 1];
    }

    public int GetMin()
    {
        return min;
    }
}
