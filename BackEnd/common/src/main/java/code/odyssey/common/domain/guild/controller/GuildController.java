package code.odyssey.common.domain.guild.controller;

import code.odyssey.common.domain.guild.dto.GuildCreateRequest;
import code.odyssey.common.domain.guild.dto.GuildDetailInfo;
import code.odyssey.common.domain.guild.dto.GuildInfo;
import code.odyssey.common.domain.guild.dto.GuildSearchCond;
import code.odyssey.common.domain.guild.dto.GuildSearchInfo;
import code.odyssey.common.domain.guild.dto.GuildStreakInfo;
import code.odyssey.common.domain.guild.dto.ProblemTypeInfo;
import code.odyssey.common.domain.guild.dto.ProblemTypeStatistics;
import code.odyssey.common.domain.guild.service.GuildService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/guilds")
@RestController
public class GuildController {

    private final GuildService guildService;

    @PostMapping
    public ResponseEntity<Long> createGuild(
            @RequestBody GuildCreateRequest request,
            @RequestHeader("X-Authorization-Id") Long memberId
    ) {
        return ResponseEntity.ok(guildService.createGuild(memberId, request));
    }

    @GetMapping("/me")
    public ResponseEntity<List<GuildInfo>> getMyGuildList(
            @RequestHeader("X-Authorization-Id") Long memberId
    ){
        return ResponseEntity.ok(guildService.getGuildListOfMember(memberId));
    }

    @GetMapping
    public ResponseEntity<List<GuildSearchInfo>> searchGuilds(
        @RequestHeader("X-Authorization-Id") Long memberId,
        @Valid GuildSearchCond cond
    ) {
        return ResponseEntity.ok(guildService.searchGuilds(cond, memberId));
    }

    @GetMapping("/{guildId}")
    public ResponseEntity<GuildDetailInfo> getGuildDetail(
        @RequestHeader("X-Authorization-Id") Long memberId,
        @PathVariable("guildId") Long guildId
    ) {
        return ResponseEntity.ok(guildService.getGuildDetail(memberId, guildId));
    }

    @GetMapping("/{guildId}/introduce")
    public ResponseEntity<String> getGuildIntroduce(
        @PathVariable("guildId") Long guildId
    ) {
        return ResponseEntity.ok(guildService.getGuildIntroduce(guildId));
    }

    @GetMapping("/{guildId}/type-statistics")
    public ResponseEntity<List<ProblemTypeStatistics>> getGuildStatistics(
        @PathVariable("guildId") Long guildId
    ) {
        return ResponseEntity.ok(guildService.getGuildTypeStatistics(guildId));
    }

    @GetMapping("/{guildId}/streak")
    public ResponseEntity<List<GuildStreakInfo>> getGuildStreak(
        @PathVariable("guildId") Long guildId
    ) {
        return ResponseEntity.ok(guildService.getGuildStreak(guildId));
    }



}
