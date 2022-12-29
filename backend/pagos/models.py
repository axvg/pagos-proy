from django.db.models import (
    Model,
    TextChoices,
    CASCADE,
    DateField,
    ForeignKey,
    FloatField,
    CharField,
)
from django.utils.translation import gettext_lazy as _
from users.models import User


class Pagos(Model):
    class Servicios(TextChoices):
        NETFLIX = "NF", _("Netflix")
        AMAZON = "AP", _("Amazon Video")
        START = "ST", _("Start+")
        PARAMOUNT = "PM", _("Paramount+")

    servicio = CharField(
        max_length=2,
        choices=Servicios.choices,
        default=Servicios.NETFLIX,
    )
    fecha_pago = DateField(auto_now_add=True)
    usuario = ForeignKey(User, on_delete=CASCADE, related_name="users")
    monto = FloatField(default=0.0)
