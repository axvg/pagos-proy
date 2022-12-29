from rest_framework.serializers import ModelSerializer
from .models import Pagos


class PagoSerializer(ModelSerializer):
    class Meta:
        model = Pagos
        fields = "__all__"
        read_only_fields = ("__all__",)
