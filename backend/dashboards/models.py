from django.db import models

# Create your models here.

class Dashboard(models.Model):
    id = models.AutoField(primary_key=True)
    title = models.CharField(max_length=80)
    link = models.CharField(max_length=500)
    
    
    def __str__(self):
        return self.title