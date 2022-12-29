from . import api
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register(r"pagos", api.PagoViewSet, "pagos")

urlpatterns = router.urls
