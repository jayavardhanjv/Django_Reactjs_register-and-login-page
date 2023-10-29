from django.db import models

class Userdetail(models.Model):
    uniqueid=models.CharField(max_length=112,default='your_default_value_here')
    username=models.CharField(max_length=255)
    email=models.EmailField(max_length=255,unique=True)
    password=models.CharField(max_length=255)
    is_verified=models.BooleanField(default=False)

    def __str__(self):
        return self.email;