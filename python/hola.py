import time
import sys

sys.stdout.reconfigure(encoding='utf-8')

ROJO = "\033[91m"
VERDE = "\033[92m"
AMARILLO = "\033[93m"
AZUL = "\033[94m"
MAGENTA = "\033[95m"
CYAN = "\033[96m"
RESET = "\033[0m"

def cantar(texto, color, velocidad=0.04):
    sys.stdout.write(color)
    for letra in texto:
        sys.stdout.write(letra)
        sys.stdout.flush()
        time.sleep(velocidad)
    sys.stdout.write(RESET + "\n\n")  # 👈 doble salto de línea
    sys.stdout.flush()

def pausa(seg=1):
    time.sleep(seg)


cantar("Por eso quédate mi amor aquí 💕", ROSA := MAGENTA)
pausa(1)

cantar("Quédate a mi lado...", CYAN)
pausa(1)

cantar("No me prives de besar tus dulces labios 😔", AMARILLO)
pausa(1)

cantar("Nunca te alejes de mí...", VERDE)
pausa(1)

cantar("Sin ti no aguanto ni un segundo 💔", ROJO)
pausa(1)

cantar("Si no estás en mis brazos... 🥀", AZUL)
pausa(2)

