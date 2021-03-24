package project.transito.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import project.transito.models.Via;

@Component
public interface ViaDao extends JpaRepository<Via, Integer>{

}
