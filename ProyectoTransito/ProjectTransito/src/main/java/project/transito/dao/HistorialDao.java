package project.transito.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import project.transito.models.Historial;

@Component
public interface HistorialDao extends JpaRepository<Historial, Integer>{

}
