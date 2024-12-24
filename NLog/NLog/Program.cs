using System;
using NLog;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NLog2Var
{
    internal class Program
    {
        private static readonly Logger Logger = LogManager.GetCurrentClassLogger();

        static void Main(string[] args)
        {
            try
            {
                CauseOverflow();
            }
            catch (OverflowException ex)
            {
                Logger.Error(ex, "Произошла ошибка переполнения при выполнении операции.");
                Console.WriteLine("Ошибка: Произошла ошибка переполнения. Пожалуйста, попробуйте еще раз.");
            }
            catch (Exception ex)
            {
                Logger.Error(ex, "Произошла непредвиденная ошибка.");
                Console.WriteLine("Ошибка: Произошла непредвиденная ошибка. Пожалуйста, попробуйте еще раз.");
            }
        }

        private static void CauseOverflow()
        {
            // Метод, вызывающий переполнение
            int number = 1;
            while (true)
            {
                number *= number; // Переполнение
            }
        }
    }
}
